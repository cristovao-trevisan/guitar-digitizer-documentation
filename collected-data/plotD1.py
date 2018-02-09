import matplotlib.pyplot as plt
import numpy as np

fig, ax = plt.subplots()

ind = np.array([1,2,3,4,5])  # the x locations for the groups
width = 0.35       # the width of the bars

x= np.array(['e', 'B', 'G', 'A', 'E'])
y = np.array([ 100, 100, 100, 100, 100 ])
s = np.array([
  4.082482904638798,
  12.808837829038627,
  78.72147836842048,
  04.330912421413247,
  15.674501586972298
])
rects1 = ax.bar(ind, y, width, color='b', yerr=s)

y2 = np.array([ 100, 100, 100, 100, 100 ])
s2 = np.array([
  1.5811388300838752,
  137.22624712280191,
  60.45561872925881,
  8.219218670625376,
  0 ])
rects2 = ax.bar(ind + width, y2, width, color='r', yerr=s2)

ax.set_ylabel('Accuracy')
ax.set_xlabel('String')
ax.set_xticks(ind + width / 2)
ax.set_xticklabels(('e', 'B', 'G', 'A', 'E'))
ax.legend((rects1[0], rects2[0]), ('MacLeod', 'YIN'))
plt.show()