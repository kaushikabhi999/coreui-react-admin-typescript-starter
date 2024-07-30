import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

function useSearch() {
  const [search, setSearch] = useState("");
  const [searchValue] = useDebounce(search, 1000);
  const [barcodeSearch, setBarcodeSearch] = useState("");
  const [barcodeSearchValue] = useDebounce(barcodeSearch, 1000);
  const [dateSearch, setDateSearch] = useState("");
  const [dateSearchValue] = useDebounce(dateSearch, 1000);

  useEffect(() => {
    if (search.trim()) {
      setBarcodeSearch("");
    }
  }, [search]);

  useEffect(() => {
    if (barcodeSearch.trim()) {
      setSearch("");
    }
  }, [barcodeSearch]);

  return {
    searchValue,
    setSearch,
    search,
    barcodeSearchValue,
    setBarcodeSearch,
    barcodeSearch,
    dateSearch,
    setDateSearch,
    dateSearchValue,
  };
}

export default useSearch;
