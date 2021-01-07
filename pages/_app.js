import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import { Global, css } from '@emotion/core';
import Layout from '../components/Layout';
import { UserProvider } from '../context/User';
import { useUser } from '../hooks/useUser';

function MyApp({ Component, pageProps }) {
  const user = useUser();
  return (
    <ThemeProvider>
      <UserProvider value={user}>
        <Layout>
          <Global
            styles={css`
              html,
              body {
                padding: 0;
                margin: 0;
                font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
                  Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
                  Helvetica Neue, sans-serif;
                background: #fafafa;
              }

              a {
                color: inherit;
                text-decoration: none;
              }

              * {
                box-sizing: border-box;
              }
            `}
          />
          <CSSReset />
          <Component {...pageProps} />
        </Layout>
      </UserProvider>
    </ThemeProvider>
  );
}

export default MyApp;
