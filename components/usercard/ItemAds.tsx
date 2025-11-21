import Image from 'next/image'


interface ItemAdsProps {
    itemName: string;
    pickUpInfo: string;
    itemImage: string;
}

const ItemAds = ({itemName, pickUpInfo, itemImage}: ItemAdsProps) => {
    return (
        <div className="w-full mb-4 md:mb-auto flex items-center gap-3 p-3 bg-[#f9fafb] rounded-lg mt-2">
            <Image
                src={`${itemImage}`}
                width={400}
                height={400}
                alt="Vintage Desk Lamp"
                className="w-18 h-14 rounded-lg object-cover"
            />
            <div className="text-left grid gap-1">
                <div className="font-medium text-sm text-[#222222]">{itemName}</div>
                <div className="text-sm text-[#878686]">{pickUpInfo}</div>
            </div>
        </div>
    )
}

export default ItemAds