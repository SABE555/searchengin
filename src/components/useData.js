import  {useContext,createContext} from "react";
const DataContext = createContext();

 export    const useData = () => {
  return useContext(DataContext);
};
