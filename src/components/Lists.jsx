const Lists = (props) => {

  return (
    <>
      {console.log(props.lists[0].listName)}
      {props.lists.map(list => {
        return (
          <>
          <div className="flex rounded-lg border-2 h-[60px] mb-[16px]">
              <div key={list.listName} className="ml-[16px]">{
                list.listName}
              </div>
              <div className="mx=[16px]">Three dots menu</div>
          </div>
          </>
        )
      })}
      {/* for each/map each list */}
      {/* mb-16 */}
      {/* line height 60, margins 16 around each element */}
      {/* leading-4 */}
    </>
  );
}

export default Lists;