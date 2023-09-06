import Header from "@components/Header"
import { textsStyle } from "@styles/texts"
import { useEffect, useState } from "react"
import { Text } from "react-native"

export default function Home() {
  const [hours, setHours] = useState<number>(0)

  useEffect(
    () => {
      setHours(new Date().getHours())
    }, [new Date().getHours() != hours]
  )

  return(
    <>
      <Header>
        <Text style={textsStyle.title_2}>
          {hours >= 18? "Boa noite" : hours >= 12? "Boa tarde" : "Bom dia"},
        </Text>
        <Text style={textsStyle.subtitle}>{"miguelito"}</Text>
      </Header>
       
    </>
  )
}