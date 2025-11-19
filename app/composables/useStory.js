export const useStory = () => {
  const herName = useState("herName", () => "")
  const ending = useState("ending", () => null)

  const setName = (v) => herName.value = v
  const chooseEnding = (v) => ending.value = v

  return { herName, ending, setName, chooseEnding }
}
