class Solution(object):
    def searchInsert(self, nums, target):
        for i in range(len(nums)):
            if (target<=nums[i]):return i
A=Solution()
a=A.searchInsert([1,3,4,6,7],5)
print(a)