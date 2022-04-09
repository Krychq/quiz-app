import styles from '../styles/Index.module.scss'
import { SegmentedControl, NativeSelect, Slider, InputWrapper, Button } from '@mantine/core';
import { ChevronDown } from 'tabler-icons-react';
import { useForm } from 'react-hook-form';
export default function Home() {

  const { register, handleSubmit } = useForm();

  function onSubmit(data){
    console.log(data);
    fetch('api/getQustions',{
      method: "POST",
      body: JSON.stringify(data)

    })
    .then(res => res.json()).then(res => console.log(res))
    

  }

  return (
    <form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
      <h1>Quiz App</h1>

      <NativeSelect
        name='category'
        {...register("category")}
        style={{width: '50%'}}
        styles={{
          label: { color: 'white' },
          rightSection: { color: 'black' }
        }}
        label="Select Category:"
        data={[
          { label: 'Book', value: '10' },
          { label: 'Film', value: '11' },
          { label: 'Music', value: '12' },
          { label: 'Sports', value: '21' },
          { label: 'History', value: '23' }
        ]}
        rightSection={<ChevronDown size={14} />}
        variant="filled"
        rightSectionWidth={40}
      />

        <SegmentedControl
          name='difficult'
          {...register("difficult")}
          style={{width: '50%'}}
          data={[
            { label: 'Easy', value: 'easy' },
            { label: 'Medium', value: 'medium' },
            { label: 'Hard', value: 'hard' }
          ]}
          color="violet"
          size="md"
        />

      <InputWrapper
        style={{width: '50%'}}
        styles={{
          label: { color: 'white' }
        }}
        label="Number of Questions:"
      >

        <Slider
          name='questionsNumber'
          {...register("questionsNumber")}
          styles={{
            markLabel: { color: 'white' }
          }}
          min={1}
          max={10}
          marks={[
            { value: 1, label: '1' },
            { value: 2, label: '2' },
            { value: 3, label: '3' },
            { value: 4, label: '4' },
            { value: 5, label: '5' },
            { value: 6, label: '6' },
            { value: 7, label: '7' },
            { value: 8, label: '8' },
            { value: 9, label: '9' },
            { value: 10, label: '10' },
          ]}
        />
      </InputWrapper>
      
      <Button color="violet" size="md" type='submit'>
        Let's go!
      </Button>
    </form>
  )
}
