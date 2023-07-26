export const getEvent = async (id: string) => {
  const response = await fetch(`http://localhost:3000/api/event/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id }),
  });
  const data = (await response.json()) as Event;
  console.log(data);
  return data;
};
