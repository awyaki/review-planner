/*
 * Google Authentication server send request whose body have g_csrf_token, credential and select_by.
 * see https://developers.google.com/identity/gsi/web/reference/html-reference
 *
 * CAUTION: I can't see select_by field in the request body.
 * So here, I implemented GoogleOneTapRequestBody type
 * so that it doesn't have selet_by field.
 */

const G_CSRF_TOKEN = "g_csrf_token";
const CREDENTIAL = "credential";

class FialedToParseRequestBody extends Error {}

type GoogleOneTapRequestBody = {
  g_csrf_token: string;
  credential: string;
};

const isGoogleOneTapRequestBody = (
  body: unknown
): body is GoogleOneTapRequestBody => {
  if (body === null) return false;
  if (typeof body !== "object") return false;
  const hasCredential = Object.hasOwn(body, G_CSRF_TOKEN);
  const hasGCsrfToken = Object.hasOwn(body, CREDENTIAL);

  if (!hasCredential) return false;
  if (!hasGCsrfToken) return false;
  return true;
};

export const parseIntoGoogleOneTapRequestBody = (
  body: unknown
): GoogleOneTapRequestBody | FialedToParseRequestBody => {
  if (!isGoogleOneTapRequestBody(body))
    return new FialedToParseRequestBody("Error: This request body is invaild.");
  return body;
};
