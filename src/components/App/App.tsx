import { Core } from "@ag.ds-next/react/core";
import { RootStyleRegistry } from "../RootStyleRegistry/RootStyleRegistry";
import { theme } from "@ag.ds-next/react/ag-branding";

export const App = ({ children }: { children: React.ReactNode }) => {
  return (
    <RootStyleRegistry>
      <Core theme={theme}>{children}</Core>
    </RootStyleRegistry>
  );
};
