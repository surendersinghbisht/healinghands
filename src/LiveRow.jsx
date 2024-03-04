import React from "react";
import cx from "classnames";

function LiveRow({dataL, index}) {

const onclick= () => {
  alert('notification has been sent to all the rescue teams near this location!')
}

const colour = () => {
  if(index <=3) { 
  return 'bg-gradient-to-r from-red-600 to-red-800';
  }

  if(index <=10 && index>3 ) {
    return 'bg-gradient-to-r from-orange-400 to-orange-600';
  }

  if(index >10  && index <21) {
  return 'bg-yellow-500';
  }

  if(index > 20) {
    return 'bg-green-500';
  }
}

  return (
    <div>
   <div onClick={onclick} className={cx(colour(),'p-2 w-1/2 rounded-md h-8 m-4 shadow-lg hover:-translate-y-1')}>
<h2 className='font-semibold text-center text-white' >
    {dataL.name.common}
</h2>
    </div>
    </div>
  );
}

export default LiveRow;
