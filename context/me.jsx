import { createContext, useContext } from "react";
import { useQuery } from "react-query";
import { getMe } from "../api";
import UserInputDialog from "../components/UserInputDialog/UserInputDialog";

const MeContext = createContext(null);

function MeContextProvider({ children }) {
  const { data, isLoading, refetch, isError, error } = useQuery({
    queryKey: ["me"],
    queryFn: getMe,
    refetchOnWindowFocus: false,
    retry: false,
  });

  if (isError) {
    return (
      <>
        <UserInputDialog refetch={refetch} />
      </>
    );
  }

  return (
    <MeContext.Provider value={{ user: data, refetch }}>
      {isLoading ? <div>Loading...</div> : children}
    </MeContext.Provider>
  );
}

const useMe = () => useContext(MeContext);

export { MeContextProvider, useMe };

