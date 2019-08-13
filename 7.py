class Solution:
    def reverse(self, x):
        if(x==0 or x>2**31-1 or x<-2**31):
            return 0
        a=1
        if(x<0):
            x=0-x
            a=-1
        str_x = str(x)
        str_x=str_x[::-1]
        int_x=int(str_x)
        int_x=a*Solution.qu0(int_x)
        if(int_x>2**31-1 or int_x<-2**31):
            int_x = 0
        return int_x
    def qu0(i):
        if(i%10==0):
            Solution.qu0(i/10)
        else:
            return i
aaa=Solution()
aaa.reverse(2345)