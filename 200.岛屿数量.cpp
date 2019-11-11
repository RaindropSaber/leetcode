/*
 * @lc app=leetcode.cn id=200 lang=cpp
 *
 * [200] 岛屿数量
 */

// @lc code=start
class Solution {
public:
	void dfs(vector<vector<char> >&grid,int i,int j,int number,int m,int n)
	{
		if(j<0||i<0||i>=m||j>=n||grid[i][j]=='0')
			return;
		int x;
		int y;
		int a[4]={0,-1,0,1};
		int b[4]={1,0,-1,0};
		grid[i][j]='0';
		for(int k=0;k<4;k++)
		{
			x=i+a[k];
			y=j+b[k];
			dfs(grid,x,y,number,m,n);
		}

	}
    int numIslands(vector<vector<char> >& grid) {
	if(grid.size()==0)
		return 0;
     int res=0;
	 int m=grid.size();
	 int n=grid[0].size();
	 for(int i=0;i<m;i++)
	 {
		 for(int j=0;j<n;j++)
		 {
			 if(grid[i][j]=='1')
			 {
				 res=res+1;
			 	dfs(grid,i,j,res,m,n);
			 }
		 }
	 }
	 return res;
    }
};
// @lc code=end

