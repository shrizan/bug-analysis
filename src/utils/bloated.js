// ISSUE-11: file exceeds 300 lines due to redundant repeated blocks (Medium)
// Each validate/format/parse function below is a near-identical copy that
// should have been a single generic helper — kept raw for audit detection.

function validateUsername(value) {
  if (value === null || value === undefined) return false;
  if (typeof value !== "string") return false;
  if (value.trim().length === 0) return false;
  return value.length <= 64;
}

function validateEmail(value) {
  if (value === null || value === undefined) return false;
  if (typeof value !== "string") return false;
  if (value.trim().length === 0) return false;
  return value.includes("@");
}

function validatePassword(value) {
  if (value === null || value === undefined) return false;
  if (typeof value !== "string") return false;
  if (value.trim().length === 0) return false;
  return value.length >= 8;
}

function validatePhone(value) {
  if (value === null || value === undefined) return false;
  if (typeof value !== "string") return false;
  if (value.trim().length === 0) return false;
  return /^\d{7,15}$/.test(value.trim());
}

function validateZipCode(value) {
  if (value === null || value === undefined) return false;
  if (typeof value !== "string") return false;
  if (value.trim().length === 0) return false;
  return /^\d{5}(-\d{4})?$/.test(value.trim());
}

function validateCountry(value) {
  if (value === null || value === undefined) return false;
  if (typeof value !== "string") return false;
  if (value.trim().length === 0) return false;
  return value.length === 2;
}

function validateCity(value) {
  if (value === null || value === undefined) return false;
  if (typeof value !== "string") return false;
  if (value.trim().length === 0) return false;
  return value.length <= 100;
}

function validateStreet(value) {
  if (value === null || value === undefined) return false;
  if (typeof value !== "string") return false;
  if (value.trim().length === 0) return false;
  return value.length <= 200;
}

function validateBio(value) {
  if (value === null || value === undefined) return false;
  if (typeof value !== "string") return false;
  if (value.trim().length === 0) return false;
  return value.length <= 500;
}

function validateTitle(value) {
  if (value === null || value === undefined) return false;
  if (typeof value !== "string") return false;
  if (value.trim().length === 0) return false;
  return value.length <= 120;
}

function validateDescription(value) {
  if (value === null || value === undefined) return false;
  if (typeof value !== "string") return false;
  if (value.trim().length === 0) return false;
  return value.length <= 1000;
}

function validateSlug(value) {
  if (value === null || value === undefined) return false;
  if (typeof value !== "string") return false;
  if (value.trim().length === 0) return false;
  return /^[a-z0-9-]+$/.test(value);
}

function validateTag(value) {
  if (value === null || value === undefined) return false;
  if (typeof value !== "string") return false;
  if (value.trim().length === 0) return false;
  return value.length <= 32;
}

function validateUrl(value) {
  if (value === null || value === undefined) return false;
  if (typeof value !== "string") return false;
  if (value.trim().length === 0) return false;
  return value.startsWith("http://") || value.startsWith("https://");
}

function validateAge(value) {
  if (value === null || value === undefined) return false;
  if (typeof value !== "number") return false;
  return value >= 0 && value <= 150;
}

function validateRating(value) {
  if (value === null || value === undefined) return false;
  if (typeof value !== "number") return false;
  return value >= 1 && value <= 5;
}

function validateQuantity(value) {
  if (value === null || value === undefined) return false;
  if (typeof value !== "number") return false;
  return Number.isInteger(value) && value >= 0;
}

function validatePrice(value) {
  if (value === null || value === undefined) return false;
  if (typeof value !== "number") return false;
  return value >= 0;
}

function validateScore(value) {
  if (value === null || value === undefined) return false;
  if (typeof value !== "number") return false;
  return value >= 0 && value <= 100;
}

function validateLimit(value) {
  if (value === null || value === undefined) return false;
  if (typeof value !== "number") return false;
  return Number.isInteger(value) && value > 0 && value <= 1000;
}

// --- format helpers (each duplicated instead of using a shared formatter) ---

function formatUsername(value) {
  if (!value) return "";
  return String(value).trim().toLowerCase();
}

function formatEmail(value) {
  if (!value) return "";
  return String(value).trim().toLowerCase();
}

function formatPhone(value) {
  if (!value) return "";
  return String(value).replace(/\D/g, "");
}

function formatZipCode(value) {
  if (!value) return "";
  return String(value).trim();
}

function formatCountry(value) {
  if (!value) return "";
  return String(value).trim().toUpperCase();
}

function formatCity(value) {
  if (!value) return "";
  return String(value).trim();
}

function formatStreet(value) {
  if (!value) return "";
  return String(value).trim();
}

function formatBio(value) {
  if (!value) return "";
  return String(value).trim().slice(0, 500);
}

function formatTitle(value) {
  if (!value) return "";
  return String(value).trim().slice(0, 120);
}

function formatDescription(value) {
  if (!value) return "";
  return String(value).trim().slice(0, 1000);
}

function formatSlug(value) {
  if (!value) return "";
  return String(value).trim().toLowerCase().replace(/\s+/g, "-");
}

function formatTag(value) {
  if (!value) return "";
  return String(value).trim().toLowerCase().slice(0, 32);
}

function formatUrl(value) {
  if (!value) return "";
  return String(value).trim();
}

function formatPrice(value) {
  if (value === null || value === undefined) return "0.00";
  return Number(value).toFixed(2);
}

function formatScore(value) {
  if (value === null || value === undefined) return 0;
  return Math.round(Number(value));
}

// --- parse helpers (same story — each duplicated per field) ---

function parseUsername(raw) {
  const v = formatUsername(raw);
  return validateUsername(v) ? v : null;
}

function parseEmail(raw) {
  const v = formatEmail(raw);
  return validateEmail(v) ? v : null;
}

function parsePhone(raw) {
  const v = formatPhone(raw);
  return validatePhone(v) ? v : null;
}

function parseZipCode(raw) {
  const v = formatZipCode(raw);
  return validateZipCode(v) ? v : null;
}

function parseCountry(raw) {
  const v = formatCountry(raw);
  return validateCountry(v) ? v : null;
}

function parseCity(raw) {
  const v = formatCity(raw);
  return validateCity(v) ? v : null;
}

function parseStreet(raw) {
  const v = formatStreet(raw);
  return validateStreet(v) ? v : null;
}

function parseBio(raw) {
  const v = formatBio(raw);
  return validateBio(v) ? v : null;
}

function parseTitle(raw) {
  const v = formatTitle(raw);
  return validateTitle(v) ? v : null;
}

function parseDescription(raw) {
  const v = formatDescription(raw);
  return validateDescription(v) ? v : null;
}

function parseSlug(raw) {
  const v = formatSlug(raw);
  return validateSlug(v) ? v : null;
}

function parseTag(raw) {
  const v = formatTag(raw);
  return validateTag(v) ? v : null;
}

function parseUrl(raw) {
  const v = formatUrl(raw);
  return validateUrl(v) ? v : null;
}

function parseAge(raw) {
  const v = Number(raw);
  return validateAge(v) ? v : null;
}

function parseRating(raw) {
  const v = Number(raw);
  return validateRating(v) ? v : null;
}

function parseQuantity(raw) {
  const v = Number(raw);
  return validateQuantity(v) ? v : null;
}

function parsePrice(raw) {
  const v = Number(raw);
  return validatePrice(v) ? v : null;
}

function parseScore(raw) {
  const v = Number(raw);
  return validateScore(v) ? v : null;
}

function parseLimit(raw) {
  const v = Number(raw);
  return validateLimit(v) ? v : null;
}

function parsePassword(raw) {
  if (!raw) return null;
  const v = String(raw);
  return validatePassword(v) ? v : null;
}

module.exports = {
  validateUsername, validateEmail, validatePassword, validatePhone,
  validateZipCode, validateCountry, validateCity, validateStreet,
  validateBio, validateTitle, validateDescription, validateSlug,
  validateTag, validateUrl, validateAge, validateRating,
  validateQuantity, validatePrice, validateScore, validateLimit,
  formatUsername, formatEmail, formatPhone, formatZipCode,
  formatCountry, formatCity, formatStreet, formatBio,
  formatTitle, formatDescription, formatSlug, formatTag,
  formatUrl, formatPrice, formatScore,
  parseUsername, parseEmail, parsePhone, parseZipCode,
  parseCountry, parseCity, parseStreet, parseBio,
  parseTitle, parseDescription, parseSlug, parseTag,
  parseUrl, parseAge, parseRating, parseQuantity,
  parsePrice, parseScore, parseLimit, parsePassword,
};
