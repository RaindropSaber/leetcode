def maxSubArray(nums):
    # max1=nums[0]
    # for i in range(len(nums)):
    #     count=0
    #     max0=nums[i]
    #     for j in nums[i:]:
    #         count+=j
    #         if(max0<count):
    #             max0=count
    #     if (max0>max1):max1=max0
    # return max1
    ans=0
    maxn=nums[0]
    for i in range(len(nums)):
        print(maxn)
        if(ans < 0):ans = 0
        ans += nums[i]
        if(ans>maxn):maxn=ans
    return maxn


print(maxSubArray([-2,-1,0,2,3,-6,8]))