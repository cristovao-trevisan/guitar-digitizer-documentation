import matplotlib.pyplot as plt
import numpy as np

fig, ax = plt.subplots()

ind = np.array([1,2,3,4,5])  # the x locations for the groups
width = 0.35       # the width of the bars

y = np.array([
  0.1700000000000017,
  3.509999999999991,
  0.5962499999999977,
  0.4866666666666717,
  0.21750000000000114
])
s = np.array([
  0,
  5.2103502761330756,
  0.14430328305343346,
  0.3579882058889019,
  1.513633184317345
])
rects1 = ax.bar(ind, y, width, color='b', yerr=s)

y2 = np.array([
  0.33500000000000796,
  0.9553571428571388,
  0.6815384615384659,
  0.16222222222222626,
  2.1599999999999966
])
s2 = np.array([
  0.3950000000000031,
  3.0749535213013006,
  0.5311503648301222,
  0.2923953859560637,
  0
])
rects2 = ax.bar(ind + width, y2, width, color='r', yerr=s2)

ax.set_ylabel('Error Rate (% of note)')
ax.set_xlabel('String')
ax.set_xticks(ind + width / 2)
ax.set_xticklabels(('e', 'B', 'G', 'A', 'E'))
ax.legend((rects1[0], rects2[0]), ('MacLeod', 'YIN'))
plt.show()