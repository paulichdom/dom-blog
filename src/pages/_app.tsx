import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { NextPage } from "next";
import { ReactElement, ReactNode, useState } from "react";
import "@mantine/core/styles.css";
import {
  AppShell,
  Avatar,
  Burger,
  createTheme,
  Group,
  MantineProvider,
  SegmentedControl,
  UnstyledButton,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
//import classes from "@/pages/MobileNavbar.module.css";
import { ColorSchemeToggle } from "@/components/ColorSchemeToggle/ColorSchemeToggle";
import classesSeg from "@/pages/segControl.module.css";
import { Navbar } from "@/components/Navbar";
import classes from "@/pages/HeaderSimple.module.css";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const theme = createTheme({
  /** Put your mantine theme override here */
});

const links = [
  { link: '/about', label: 'Features' },
  { link: '/pricing', label: 'Pricing' },
  { link: '/learn', label: 'Learn' },
  { link: '/community', label: 'Community' },
];

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  //const getLayout = Component.getLayout ?? ((page) => page);
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);
  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <MantineProvider theme={theme}>
      <AppShell
        header={{ height: 60 }}
        navbar={{
          width: 300,
          breakpoint: "sm",
          collapsed: { desktop: true, mobile: !opened },
        }}
        padding="md"
      >
        <AppShell.Header withBorder={false}>
          <Group h="100%" px="md">
            <Burger
              opened={opened}
              onClick={toggle}
              hiddenFrom="sm"
              size="sm"
            />
            <Group justify="space-between" style={{ flex: 1 }}>
              <Avatar size={30} />
              <Group gap={5} visibleFrom="xs">
          {items}
        </Group>
              <ColorSchemeToggle />
            </Group>
          </Group>
        </AppShell.Header>

        <AppShell.Navbar py="md" px={4}>
          <UnstyledButton className={classes.mobileNavbar}>Home</UnstyledButton>
          <UnstyledButton className={classes.mobileNavbar}>Blog</UnstyledButton>
          <UnstyledButton className={classes.mobileNavbar}>
            Contacts
          </UnstyledButton>
          <UnstyledButton className={classes.mobileNavbar}>
            Support
          </UnstyledButton>
        </AppShell.Navbar>

        <AppShell.Main>
          <Component {...pageProps} />
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
}
