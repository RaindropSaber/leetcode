class Solution(object):
    def countAndSay(self,n):
        oldStr='1'
        for i in range(n-1):
            f=oldStr[0]
            index=0
            newStr=''
            for i in range(len(oldStr)):
                if(f==oldStr[i]):
                    index+=1
                else:
                    newStr=newStr+str(index)+f
                    index=1
                    f=oldStr[i]
            oldStr=newStr+str(index)+f
        return oldStr

        
A=Solution()
a=A.countAndSay(9)
# a=A.wwwww('1211')
print(a)

