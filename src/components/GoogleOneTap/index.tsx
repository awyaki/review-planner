import Script from "next/script";
export const GoogleOneTap: React.FC = () => {
  return (
    <>
      <Script src="https://accounts.google.com/gsi/client" async defer></Script>
      <div
        id="g_id_onload"
        data-client_id={process.env.NEXT_PUBLIC_GOOGLE_ID}
        data-context="signin"
        data-login_uri="http://localhost:3000/api/login"
        data-auto_select="true"
        data-itp_support="true"
      ></div>
      <p>ログインしてください</p>
    </>
  );
};
