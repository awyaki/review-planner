import { OAuth2Client } from "google-auth-library";

class FailToGetPayload extends Error {}

const CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_ID;
const client = new OAuth2Client(CLIENT_ID);

export const verify = async (
  token: string
): Promise<{
  name: string | undefined;
  userId: string;
  picture: string | undefined;
}> => {
  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: CLIENT_ID,
    });

    const payload = ticket.getPayload();
    if (!payload) throw new FailToGetPayload();

    return {
      name: payload["name"],
      userId: payload["sub"],
      picture: payload["picture"],
    };
  } catch (e) {
    throw e;
  }
};
