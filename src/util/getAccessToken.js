export const getAccessToken = () => {
  typeof window !== undefined
    ? sessionStorage.getItem("accessToken")
    : undefined;
};
