import axios from "axios";

const api = axios.create({
  baseURL: "https://645a7a4965bd868e931c509e.mockapi.io",
});

export const getUsers = async (page = 1) => {
  try {
    const { data } = await api.get("/user", {
      params: {
        page,
        limit: 12,
      },
    });
    return data;
  } catch (err) {
    console.log(err.message);
  }
};

export const followUser = async (id, followers) => {
  try {
    await api.put(`/user/${id}`, {
      followers,
      isFollowing: true,
    });
  } catch (err) {
    console.error(err);
  }
};

export const unFollowUser = async (id, followers) => {
  try {
    await api.put(`/user/${id}`, {
      followers,
      isFollowing: false,
    });
  } catch (err) {
    console.error(err);
  }
};