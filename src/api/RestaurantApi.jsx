import { useQuery } from "react-query";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useGetRestaurant = (restaurantId) => {
  const getMyRestaurantRequest = async () => {
    const response = await fetch(
      `${API_BASE_URL}/api/restaurant/${restaurantId}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch restaurant details");
    }
    return response.json();
  };
  const { data: restaurant, isLoading } = useQuery(
    "fetchRestaurant",
    getMyRestaurantRequest,
    {
      enabled: !!restaurantId,
    }
  );
  return { restaurant, isLoading };
};

export const useSearchRestaurants = (searchState, city) => {
  const createSearchRequest = async () => {
    const params = new URLSearchParams();
    params.set("searchQuery", searchState.searchQuery);
    params.set("page", searchState.page);
    params.set("limit", 10);
    params.set("selectedCuisines", searchState.selectedCuisines.join(","));
    params.set("sortOption", searchState.sortOption);

    const response = await fetch(
      `${API_BASE_URL}/api/restaurant/search/${city}?${params.toString()}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch restaurants");
    }

    return response.json();
  };

  const { data: results, isLoading } = useQuery(
    ["searchRestaurants", searchState],
    createSearchRequest,
    {
      enabled: !!city,
    }
  );
  console.log("results from restaurant api", results);

  return { results, isLoading };
};
