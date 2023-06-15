import React from 'react'

const ChartItemIcon = ({ last_week_rank, rank }) => {
  if (last_week_rank == undefined) {
    return (
      <span className="bg-purple-700 text-align-center rounded-sm py-[3px] px-[6px] text-xs text-white font-bold absolute right-1 ">
        NEW
      </span>
    )
  }

  if (last_week_rank > rank) {
    return <svg xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto' }} viewBox="0 0 26.191 26.191"><g data-name="Group 7170" transform="translate(-626 -1965.469)"><circle data-name="Ellipse 494" cx="13.095" cy="13.095" r="13.095" transform="translate(626 1965.469)" fill="#448118"></circle><path d="M639.989 1975.227v10.77h-1.82v-10.77l-4.882 4.746-1.287-1.251 7.079-6.882 7.079 6.882-1.288 1.251z" fill="#fff"></path></g></svg>
  }

  if (last_week_rank == rank) {
    return <svg xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto' }} viewBox="0 0 26.191 26.191"><g data-name="Group 3" transform="translate(-626 -1915)"><circle data-name="Ellipse 494" cx="13.095" cy="13.095" r="13.095" transform="translate(626 1915)" fill="#8289a1"></circle><path d="M642.771 1928.989h-10.77v-1.82h10.77l-4.746-4.882 1.251-1.287 6.882 7.079-6.882 7.079-1.251-1.288z" fill="#fff"></path></g></svg>
  }

  return <svg xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto' }} viewBox="0 0 26.191 26.191"><g data-name="Group 7171"><g data-name="final red"><circle data-name="Ellipse 494" cx="13.095" cy="13.095" r="13.095" fill="#b91b20"></circle></g><path d="M12.167 17.141V6.371h1.82v10.77l4.882-4.746 1.287 1.251-7.079 6.882-7.079-6.882 1.288-1.251z" fill="#fff"></path></g></svg>
}

export default ChartItemIcon