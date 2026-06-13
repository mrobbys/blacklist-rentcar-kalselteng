import CardItem from './CardItem';

const CardList = ({ filteredData = [], totalCount = 0, children = null }) => {
  return (
    <div className="space-y-4 px-4 pt-6 pb-12">
      <div className="text-neutral-gray-base flex items-center justify-between text-xs font-semibold">
        <span>Hasil Pencarian</span>
        <span>{totalCount} Data Terdeteksi</span>
      </div>

      {filteredData.map((item, index) => {
        const uniqueKey = item.NO ? item.NO : `${item.NAMA}-${index}`;
        return (
          <CardItem
            key={uniqueKey}
            item={item}
          />
        );
      })}

      {children}
    </div>
  );
};

export default CardList;
