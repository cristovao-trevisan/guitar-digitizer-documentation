import matplotlib.pyplot as plt
import numpy as np

fig, ax = plt.subplots()

ind = np.array([1,2,3,4,5])  # the x locations for the groups
width = 0.35       # the width of the bars

y = np.array([
   6.938333333333333,
  6.790000000000006,
  7.903333333333322,
  6.988243243243254,
  7.068311688311709 
])
s = np.array([
  0.10073342157507627,
  0.04320493798938372,
  0.29861408267255335,
  0.817159480461679,
  0.4384370191184972
])
rects1 = ax.bar(ind, y, width, color='b', yerr=s)

y2 = np.array([
   0.1386666666666656,
  0.4609375,
  0.4515151515151601,
  2.1599999999999966,
  45
])
s2 = np.array([
   1.3001018763500363,
  1.0373956555209543,
  0.6997104215408371,
  0,
  0
])
rects2 = ax.bar(ind + width, y2, width, color='r', yerr=s2)

ax.set_ylabel('Error Rate')
ax.set_xlabel('String')
ax.set_xticks(ind + width / 2)
ax.set_xticklabels(('e', 'B', 'G', 'A', 'E'))
ax.legend((rects1[0], rects2[0]), ('MacLeod', 'YIN'))
plt.show()