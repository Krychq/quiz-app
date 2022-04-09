import { Modal, Button } from '@mantine/core';
import Link from 'next/link'
import styles from '../styles/ContinueModal.module.scss'

export default function ContinueModal({setQuests}) {

    return(
        <>
            <Modal
                opened={true}
                onClose={() => setQuests(null)}
                classNames={{
                    modal: styles.modal,
                    body: styles.container,
                    inner: styles.inner
                  }}
            >

                <h1>Do you want continue your old quiz?</h1>

                <div className={styles.btnsWrapper}> 
                    <Button
                        color="violet"
                        variant="outline"
                        size="md"
                        onClick={() => setQuests(null)}
                    >
                        New quiz
                    </Button>

                    <Button color="violet" size="md">
                        <Link href='/quiz'>Continue</Link>
                    </Button>
                </div>
            </Modal>
        </>
    )
}