import React from "react"
import styles from "../styles/Index.module.scss"
import axios from "axios"

import {
  SegmentedControl,
  NativeSelect,
  Slider,
  InputWrapper,
  Button,
} from "@mantine/core"
import { useForm } from "@mantine/form"
import { ChevronDown } from "tabler-icons-react"
import { useRouter } from "next/router"

import { QuizContext } from "../context/QuizContext"

import ContinueModal from "../components/ContinueModal"
import Loading from "../components/Loading"

export default function Home() {
  const { quests, setQuests } = React.useContext(QuizContext)
  const [loading, setLoading] = React.useState(false)
  const form = useForm({
    initialValues: { category: "10", difficult: "easy", questionsNumber: "1" },
  })
  const router = useRouter()

  async function onSubmit({ category, difficult, questionsNumber }) {
    setLoading(true)
    const response = await axios.get(
      `https://opentdb.com/api.php?amount=${questionsNumber}&category=${category}&difficulty=${difficult}`
    )
    setQuests(response.data.results)
    router.push("/quiz")
  }

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          {quests != null && <ContinueModal setQuests={setQuests} />}
          <form
            className={styles.container}
            onSubmit={form.onSubmit((values) => onSubmit(values))}
          >
            <h1>Quiz App</h1>

            <NativeSelect
              {...form.getInputProps("category")}
              style={{ width: "50%" }}
              styles={{
                label: { color: "white" },
                rightSection: { color: "black" },
              }}
              label="Select Category:"
              data={[
                { label: "Book", value: "10" },
                { label: "Film", value: "11" },
                { label: "Music", value: "12" },
                { label: "Sports", value: "21" },
                { label: "History", value: "23" },
              ]}
              rightSection={<ChevronDown size={14} />}
              variant="filled"
              rightSectionWidth={40}
            />

            <SegmentedControl
              {...form.getInputProps("difficult")}
              style={{ width: "50%" }}
              data={[
                { label: "Easy", value: "easy" },
                { label: "Medium", value: "medium" },
                { label: "Hard", value: "hard" },
              ]}
              color="violet"
              size="md"
            />

            <InputWrapper
              style={{ width: "50%" }}
              styles={{
                label: { color: "white" },
              }}
              label="Number of Questions:"
            >
              <Slider
                {...form.getInputProps("questionsNumber")}
                styles={{
                  markLabel: { color: "white" },
                }}
                min={1}
                max={10}
                marks={[
                  { value: 1, label: "1" },
                  { value: 2, label: "2" },
                  { value: 3, label: "3" },
                  { value: 4, label: "4" },
                  { value: 5, label: "5" },
                  { value: 6, label: "6" },
                  { value: 7, label: "7" },
                  { value: 8, label: "8" },
                  { value: 9, label: "9" },
                  { value: 10, label: "10" },
                ]}
              />
            </InputWrapper>

            <Button color="violet" size="md" type="submit">
              Let's go!
            </Button>
          </form>
        </>
      )}
    </>
  )
}
