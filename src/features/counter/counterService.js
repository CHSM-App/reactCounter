import api from "../../services/api";

export async function saveCount(count) {
  const response = await api.post("/users/savecount", { count });
  return response.data;
}
