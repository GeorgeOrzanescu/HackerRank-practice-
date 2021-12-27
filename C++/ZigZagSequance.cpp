/*
In this challenge, the task is to debug the existing code to successfully execute all provided test files.


Given an array of  n distinct integers, transform the array into a zig zag sequence by permuting the array 
elements. A sequence will be called a zig zag sequence if the first k elements in the sequence are 
in increasing order and the last k elements are in decreasing order, where k = (n+1)/2 .
 You need to find the lexicographically smallest zig zag sequence of the given array.

*/

#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

void findZigZagSequence(vector<int> a, int n)
{
    sort(a.begin(), a.end());

    int mid = (n + 1) / 2 - 1; // modified  NEED TO BE SMALLER BY 1
    cout << mid;
    swap(a[mid], a[n - 1]);

    int st = mid + 1;
    int ed = n - 2; // modified    we already swapped the last element
    while (st <= ed)
    {
        swap(a[st], a[ed]);
        st = st + 1;
        ed = ed - 1; // modified   Infinite loop otherwise
    }
    for (int i = 0; i < n; i++)
    {
        if (i > 0)
            cout << " ";
        cout << a[i];
    }
    cout << endl;
}

int main()
{
    // int n, x;
    // int test_cases;
    // cin >> test_cases;

    // for (int cs = 1; cs <= test_cases; cs++)
    // {
    //     cin >> n;
    //     vector<int> a;
    //     for (int i = 0; i < n; i++)
    //     {
    //         cin >> x;
    //         a.push_back(x);
    //     }
    //     findZigZagSequence(a, n);
    // }

    vector<int> a = {1, 2, 3, 4, 5, 6, 7};
    // vector<int> b = {1, 4, 3, 8, 5, 9, 2, 6, 7, 10};
    vector<int> c = {2, 3, 5, 1, 4};
    findZigZagSequence(a, 7);

    // findZigZagSequence(b, 9);
    findZigZagSequence(c, 5);
}