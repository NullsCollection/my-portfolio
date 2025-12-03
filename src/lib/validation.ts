/**
 * Validation utilities for input sanitization and security
 */

// Email validation regex (RFC 5322 compliant)
const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

// URL validation regex
const URL_REGEX = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/i;

// Cloudinary URL pattern
const CLOUDINARY_REGEX = /^https:\/\/res\.cloudinary\.com\/[\w-]+\/image\//;

// Safe URL protocols
const SAFE_PROTOCOLS = ["http:", "https:", "mailto:"];

/**
 * Validates email format
 */
export function isValidEmail(email: string): boolean {
  if (!email || typeof email !== "string") return false;
  return EMAIL_REGEX.test(email.trim()) && email.length <= 254;
}

/**
 * Validates URL format and protocol
 */
export function isValidUrl(url: string): boolean {
  if (!url || typeof url !== "string") return false;

  try {
    const parsed = new URL(url);
    return SAFE_PROTOCOLS.includes(parsed.protocol);
  } catch {
    // Try with https:// prefix
    try {
      const parsed = new URL(`https://${url}`);
      return SAFE_PROTOCOLS.includes(parsed.protocol);
    } catch {
      return false;
    }
  }
}

/**
 * Validates if URL is a safe image URL
 */
export function isValidImageUrl(url: string): boolean {
  if (!isValidUrl(url)) return false;

  try {
    const parsed = new URL(url.startsWith("http") ? url : `https://${url}`);

    // Allow Cloudinary URLs
    if (CLOUDINARY_REGEX.test(url)) return true;

    // Allow common image extensions
    const pathname = parsed.pathname.toLowerCase();
    const validExtensions = [
      ".jpg",
      ".jpeg",
      ".png",
      ".gif",
      ".webp",
      ".svg",
      ".avif",
    ];

    return validExtensions.some((ext) => pathname.endsWith(ext));
  } catch {
    return false;
  }
}

/**
 * Sanitizes string input by removing potentially dangerous characters
 */
export function sanitizeString(input: string, maxLength = 1000): string {
  if (!input || typeof input !== "string") return "";

  return input
    .trim()
    .slice(0, maxLength)
    .replace(/[<>]/g, "") // Remove angle brackets to prevent HTML injection
    .replace(/javascript:/gi, "") // Remove javascript: protocol
    .replace(/on\w+=/gi, ""); // Remove event handlers
}

/**
 * Sanitizes HTML content (basic - for more robust sanitization, use DOMPurify)
 */
export function sanitizeHtml(input: string): string {
  if (!input || typeof input !== "string") return "";

  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;")
    .replace(/\//g, "&#x2F;");
}

/**
 * Validates username format
 */
export function isValidUsername(username: string): boolean {
  if (!username || typeof username !== "string") return false;

  // 3-30 characters, alphanumeric and underscores only
  const USERNAME_REGEX = /^[a-zA-Z0-9_]{3,30}$/;
  return USERNAME_REGEX.test(username);
}

/**
 * Validates password strength
 */
export function isValidPassword(password: string): {
  valid: boolean;
  errors: string[];
} {
  const errors: string[] = [];

  if (!password || typeof password !== "string") {
    return { valid: false, errors: ["Password is required"] };
  }

  if (password.length < 8) {
    errors.push("Password must be at least 8 characters");
  }

  if (password.length > 128) {
    errors.push("Password must be less than 128 characters");
  }

  if (!/[a-z]/.test(password)) {
    errors.push("Password must contain at least one lowercase letter");
  }

  if (!/[A-Z]/.test(password)) {
    errors.push("Password must contain at least one uppercase letter");
  }

  if (!/[0-9]/.test(password)) {
    errors.push("Password must contain at least one number");
  }

  return { valid: errors.length === 0, errors };
}

/**
 * Rate limiting helper - tracks requests per IP
 */
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

export function checkRateLimit(
  identifier: string,
  maxRequests = 5,
  windowMs = 60000
): { allowed: boolean; remaining: number; resetIn: number } {
  const now = Date.now();
  const record = rateLimitMap.get(identifier);

  // Clean up expired entries periodically
  if (Math.random() < 0.01) {
    for (const [key, value] of rateLimitMap.entries()) {
      if (now > value.resetTime) {
        rateLimitMap.delete(key);
      }
    }
  }

  if (!record || now > record.resetTime) {
    rateLimitMap.set(identifier, { count: 1, resetTime: now + windowMs });
    return { allowed: true, remaining: maxRequests - 1, resetIn: windowMs };
  }

  if (record.count >= maxRequests) {
    return {
      allowed: false,
      remaining: 0,
      resetIn: record.resetTime - now,
    };
  }

  record.count++;
  return {
    allowed: true,
    remaining: maxRequests - record.count,
    resetIn: record.resetTime - now,
  };
}
