import Heading from "@/components/typography/Heading";
import Text from "@/components/typography/Text";

type StoreCardProps = {
  picture_url: string
  store_name: string
}

export default function StoreCircleCard(props: StoreCardProps) {
  return(
    <div className="flex flex-col items-center gap-4">
      <div className="w-[80px] h-[80px] rounded-full overflow-hidden">
      
      </div>
      <Text className="font-medium text-xl">
        {props.store_name}
      </Text>
    </div>
  )
}