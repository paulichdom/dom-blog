import { IconMoonStars, IconSun } from "@tabler/icons-react";
import {
  Group,
  Switch,
  useComputedColorScheme,
  useMantineColorScheme,
} from "@mantine/core";
export function ColorSchemeToggle() {
  const { colorScheme, setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

  return (
    <Group justify="center">
      <Switch
        size="lg"
        checked={colorScheme === "dark"}
        onChange={() =>
          setColorScheme(computedColorScheme === "light" ? "dark" : "light")
        }
        color="dark.4"
        onLabel={
          <IconSun
            size={20}
            stroke={2.5}
            color="var(--mantine-color-yellow-4)"
          />
        }
        offLabel={
          <IconMoonStars
            size={20}
            stroke={2.5}
            color="var(--mantine-color-blue-6)"
          />
        }
      />
    </Group>
  );
}
