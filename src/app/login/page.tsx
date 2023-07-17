import Script from "next/script";

const Page = () => {
  return (
    <>
      <Script src="https://accounts.google.com/gsi/client" async defer></Script>
      <GoogleOneTap />
      <article className="h-screen p-5 bg-bg-secondary text-text-on-bg-secondary">
        <h1 className="mb-4 text-xl">ログイン</h1>
        <LoginWithGoogleButton />
      </article>
    </>
  );
};

export default Page;

const LoginWithGoogleButton = () => {
  return (
    <div
      className="g_id_signin"
      data-type="standard"
      data-size="large"
      data-theme="outline"
      data-text="sign_in_with"
      data-shape="rectangular"
      data-logo_alignment="left"
    ></div>
  );
};

const GoogleOneTap = () => {
  return (
    <>
      <div
        id="g_id_onload"
        data-client_id={process.env.NEXT_PUBLIC_GOOGLE_ID}
        data-context="signin"
        data-login_uri="http://localhost:3000/api/login"
        data-auto_select="true"
        data-itp_support="true"
      ></div>
    </>
  );
};
