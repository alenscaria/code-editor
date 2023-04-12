// Question Displaying Section
//next and prev button outside ques section(now displays on scrolling down if much text)

import React, { useState } from 'react';
import CustomButton from './CustomButton';

const questions = [
  {
    id: 1,
    heading: '1. Two Sum',
    question: 'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.',
    input: 'nums = [2,7,11,15], target = 9',
    output: '[0,1]',
    constraints: '2 <= nums.length <= 104, -109 <= nums[i] <= 109, -109 <= target <= 109',
  },
  {
    id: 2,
    heading: '2. Largest Rectangle in Histogram',
    question: 'Given an array of integers heights representing the histogram\'s bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.',
    input: 'heights = [2,1,5,6,2,3]',
    output: '10',
    constraints: '1 <= heights.length <= 105, 0 <= heights[i] <= 104',
  },
  {
    id: 3,
    heading: 'Question 3',
    question: 'You are given an array of n integers. Your task is to find the subarray with the largest sum. A subarray is a contiguous segment of the original array. For example, consider the array [−2,1,−3,4,−1,2,1,−5,4]. The subarray with the largest sum is [4,−1,2,1], which has a sum of 6. Write a function `findLargestSubarraySum` that takes an array of integers and returns the sum of the largest subarray.You are given an array of n integers. Your task is to find the subarray with the largest sum. A subarray is a contiguous segment of the original array. For example, consider the array [−2,1,−3,4,−1,2,1,−5,4]. The subarray with the largest sum is [4,−1,2,1], which has a sum of 6. Write a function `findLargestSubarraySum` that takes an array of integers and returns the sum of the largest subarray.You are given an array of n integers. Your task is to find the subarray with the largest sum. A subarray is a contiguous segment of the original array. For example, consider the array [−2,1,−3,4,−1,2,1,−5,4]. The subarray with the largest sum is [4,−1,2,1], which has a sum of 6. Write a function `findLargestSubarraySum` that takes an array of integers and returns the sum of the largest subarray.You are given an array of n integers. Your task is to find the subarray with the largest sum. A subarray is a contiguous segment of the original array. For example, consider the array [−2,1,−3,4,−1,2,1,−5,4]. The subarray with the largest sum is [4,−1,2,1], which has a sum of 6. Write a function `findLargestSubarraySum` that takes an array of integers and returns the sum of the largest subarray.You are given an array of n integers. Your task is to find the subarray with the largest sum. A subarray is a contiguous segment of the original array. For example, consider the array [−2,1,−3,4,−1,2,1,−5,4]. The subarray with the largest sum is [4,−1,2,1], which has a sum of 6. Write a function `findLargestSubarraySum` that takes an array of integers and returns the sum of the largest subarray.',
    input: 'hello',
    output: 'olleh',
    constraints: 'The array can have at most 10^5 elements., The integers in the array can have absolute value at most 10^9., ',
  },
  // add more questions here
];

const DisplayQuest = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleNextQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const handlePreviousQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex - 1);
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div>
      <div>
      <h1 className="font-bold">{currentQuestion.heading}</h1>
      <p className="mt-4">{currentQuestion.question}</p>
      <p className="mt-4 font-semibold">Input: {currentQuestion.input}</p>
      <p className="font-semibold">Output: {currentQuestion.output}</p>
      {currentQuestion.constraints && <p className="mt-4 font-semibold">Constraints: {currentQuestion.constraints}</p>}
      </div>
      <div>
        {currentQuestionIndex > 0 && (
          <CustomButton className="mt-6 bg-green-500 hover:bg-green-700" onClick={handlePreviousQuestion}>Previous</CustomButton>
        )}
        {currentQuestionIndex < questions.length - 1 && (
          <CustomButton className="mt-6 bg-green-500 hover:bg-green-700 ml-4" onClick={handleNextQuestion}>Next</CustomButton>
        )}
      </div>
    </div>
  );
};

export default DisplayQuest;


