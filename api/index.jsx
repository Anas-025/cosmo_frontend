const base = process.env.NEXT_PUBLIC_API_ENDPOINT || "http://localhost:8000";

const userBase = `${base}/cluster`;
const authBase = `${base}/api/auth`;
const videosBase = `${base}/api/videos`;

export function registerUser(payload) {
  return axios.post(userBase, payload).then((res) => res.data);
}

export function login(payload) {
  return axios
    .post(authBase, payload, {
      withCredentials: true,
    })
    .then((res) => res.data);
}

export async function getMe() {
  const response = await fetch(`${userBase}/getUser`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });

  if (response.status === 404) {
    throw new Error("User not found");
  }

  const data = await response.json();

  return data;
}

export function uploadVideo({ formData, config }) {
  return axios
    .post(videosBase, formData, {
      withCredentials: true,
      ...config,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((res) => res.data);
}

export function updateVideo({ videoId, ...payload }) {
  return axios.patch(`${videosBase}/${videoId}`, payload, {
    withCredentials: true,
  });
}

export function getVideos() {
  return axios.get(videosBase).then((res) => res.data);
}
