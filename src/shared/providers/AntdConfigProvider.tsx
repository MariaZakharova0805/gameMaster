import { ConfigProvider } from "antd";

interface AppConfigProviderProps {
  children: React.ReactNode;
}

export const darkTheme = {
  token: {
    colorPrimary: "#722ED1",
    colorBgBase: "#141414",
    colorTextBase: "#ffffff",
    // другие токены
  },
  components: {
    Tabs: {
      inkBarColor: "#722ED1",
      itemColor: "#bbb",
      itemActiveColor: "#722ED1",
      itemSelectedColor: "#722ED1",
    },
  },
};

export const AntConfigProvider: React.FC<AppConfigProviderProps> = ({
  children,
}) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "gray",
          colorPrimaryActive: "gray",
          colorPrimaryHover: "gray",
          colorSuccess: "green",
          colorError: "red",
          colorLink: "blue",
          colorLinkHover: "blue",
          fontSizeHeading1: 42,
          fontSizeHeading4: 18,
          fontSizeHeading5: 16,
          fontWeightStrong: 700,
        },
        components: {
          Button: {
            fontWeight: 500,
            fontSize: 16,
            lineWidth: 2,
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};
