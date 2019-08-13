class Solution(object):
    def removeElement(self,nums,val):
        number=len(nums)
        for i in range(number-1,-1,-1):
            if (nums[i]==val):
                number-=1
                nums[i],nums[number]=nums[number],nums[i]
        return number
A=Solution()
a=[3,2,5,3,6,5,3]
A.removeElement(a,5)
print(a)
