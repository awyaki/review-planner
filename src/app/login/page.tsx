import { GoogleOneTap } from "@/app/components";

const Page = () => {
  return (
    <>
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
