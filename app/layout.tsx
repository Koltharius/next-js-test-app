import '@/app/ui/globals.css';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import type { Metadata } from 'next';

import theme from '@/app/ui/theme';
import { ThemeProvider } from '@mui/material/styles';

import PageAppBar from '@/app/ui/dashboard/appbar';
import SideNav from '@/app/ui/dashboard/sidenav';

// Metadata for the app
// This metadata will be used to set the title of the page and the description of the page
export const metadata: Metadata = {
  title: {
    template: '%s | Test App',
    default: 'Test App',
  },
  description:
    'Next.js app with typescript and MUI. This app fetch and display users from reqres.in API.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            <div className="h-screen overflow-hidden">
              <PageAppBar />
              <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
                <div className="w-full flex-none md:w-64">
                  <SideNav />
                </div>
                <div className="h-screen flex-grow overflow-y-auto p-6 md:p-12">
                  {children}
                </div>
              </div>
            </div>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
