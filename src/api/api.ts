import axios from "axios";
import { lineT } from "../redux/table-reducer";

export const instance = axios.create({
  baseURL: "http://localhost:6002/table/",
});

export const API = {
  get() {
    return instance.get("line").then((res) => res.data);
  },
  update(body: lineT) {
    return instance.put("line", body).then((res) => res.data);
  },
  add(body: Omit<lineT, "id">) {
    return instance.post("line", body).then((res) => res.data);
  },
  delete(id: number) {
    return instance.delete(`line/${id}`).then((res) => res.data);
  },
};
