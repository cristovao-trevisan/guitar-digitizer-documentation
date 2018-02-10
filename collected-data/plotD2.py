import matplotlib.pyplot as plt
import numpy as np

fig, ax = plt.subplots()

ind = np.array([1,2,3,4,5])  # the x locations for the groups
width = 0.35       # the width of the bars

x= np.array(['e', 'B', 'G', 'A', 'E'])
y = np.array([
  54.54545454545454,
  28.57142857142857,
  11.764705882352941,
  33.33333333333333,
  20
])

rects1 = ax.bar(ind, y, width, color='b')

y2 = np.array([
  55.55555555555556,
  07.317073170731707,
  21.818181818181817,
  5,
  0
])
rects2 = ax.bar(ind + width, y2, width, color='r')

ax.set_ylabel('Error  (% of notes)')
ax.set_xlabel('String')
ax.set_xticks(ind + width / 2)
ax.set_xticklabels(('e', 'B', 'G', 'A', 'E'))
ax.legend((rects1[0], rects2[0]), ('MacLeod', 'YIN'))
plt.show()