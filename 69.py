class Solution(object):
    def mySqrt(self,x):
        if(x==0):return 0
        s=len(str(x))
        l=s/2
        d=s%2
        if(d==0):
            Max=10**(l)
            Min=3*10**(l-1)
        else:
            Max=4*10**(l)
            Min=10**(l)
        print(Min,Max)
        while (Min+1!=Max):
            if(x==Max**2):return Max
            k=(Min+Max)/2
            # print(k)
            if (x<k**2):
                Max=k
            elif(x>k^2):
                Min=k
            # else:
                # return k
            # print(Min,Max)
        print(Min,Max)
        return Min
    
A=Solution()
a=A.mySqrt(984230921)
print(a)