def twoSum( nums, target):
    for i in range(len(nums)):
        a=nums[0]
        del nums[0]
        for j in range(len(nums)):
            if a+nums[j]==target:
                return [i,i+j+1]
def twoSum1( nums, target):
    for i in range(len(nums)):
        a=nums[0]
        del nums[0]
        b=target-a
        if b in nums:
            print(i,nums.index(b)+1+i)
            return [i,nums.index(b)+1+i]
twoSum1([3, 2, 4],6)