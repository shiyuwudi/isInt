function 如果(这个数) {
  return {
    是: {
      一个: {
        整数: {
          则: function(怎么样) {
            const 条件成立 = Math.floor(这个数) === 这个数 && 怎么样;
            if (条件成立 && 怎么样) {
              怎么样();
            } 
            return {
              否则: function(就干别的) {
                if (!条件成立 && 就干别的) {
                  就干别的();
                }
              },
            };
          },
        },
      },
    },
  };
}
