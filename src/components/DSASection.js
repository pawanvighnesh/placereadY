import React, { useState } from 'react';
import './SectionPage.css';

const topics = [
  {
    id: 'arrays',
    icon: '🔢',
    title: 'Arrays & Strings',
    difficulty: 'Beginner → Medium',
    color: '#3B82F6',
    questions: [
      { q: 'Find the maximum subarray sum (Kadane\'s Algorithm)', difficulty: 'Easy', company: 'TCS, Infosys' },
      { q: 'Two Sum — find two numbers that add up to a target', difficulty: 'Easy', company: 'Wipro' },
      { q: 'Rotate an array by K positions', difficulty: 'Easy', company: 'Cognizant' },
      { q: 'Find duplicates in an array without extra space', difficulty: 'Medium', company: 'Accenture' },
      { q: 'Longest substring without repeating characters', difficulty: 'Medium', company: 'TCS Digital' },
      { q: 'Trapping Rain Water', difficulty: 'Hard', company: 'Amazon, Zoho' },
      { q: 'Merge two sorted arrays without extra space', difficulty: 'Medium', company: 'Infosys, HCL' },
      { q: 'Find the missing number in an array of 1 to N', difficulty: 'Easy', company: 'TCS, Wipro' },
    ],
  },
  {
    id: 'linkedlist',
    icon: '🔗',
    title: 'Linked Lists',
    difficulty: 'Easy → Medium',
    color: '#10B981',
    questions: [
      { q: 'Reverse a singly linked list (iterative and recursive)', difficulty: 'Easy', company: 'TCS, Infosys' },
      { q: 'Detect a cycle in a linked list (Floyd\'s algorithm)', difficulty: 'Medium', company: 'Cognizant' },
      { q: 'Find the middle element of a linked list', difficulty: 'Easy', company: 'Wipro, HCL' },
      { q: 'Merge two sorted linked lists', difficulty: 'Easy', company: 'Accenture' },
      { q: 'Remove the Nth node from the end', difficulty: 'Medium', company: 'TCS Digital' },
      { q: 'Check if a linked list is a palindrome', difficulty: 'Medium', company: 'Infosys' },
    ],
  },
  {
    id: 'trees',
    icon: '🌳',
    title: 'Trees & Graphs',
    difficulty: 'Medium → Hard',
    color: '#F59E0B',
    questions: [
      { q: 'Level order traversal (BFS) of a binary tree', difficulty: 'Easy', company: 'TCS, Wipro' },
      { q: 'Height / depth of a binary tree', difficulty: 'Easy', company: 'Infosys' },
      { q: 'Check if a binary tree is balanced', difficulty: 'Medium', company: 'Accenture' },
      { q: 'Lowest Common Ancestor (LCA) of a BST', difficulty: 'Medium', company: 'Cognizant' },
      { q: 'BFS and DFS traversal of a graph', difficulty: 'Medium', company: 'TCS, Zoho' },
      { q: 'Detect a cycle in a directed graph', difficulty: 'Medium', company: 'TCS Digital' },
      { q: 'Topological Sort of a DAG', difficulty: 'Hard', company: 'Amazon' },
    ],
  },
  {
    id: 'dp',
    icon: '⚡',
    title: 'Dynamic Programming',
    difficulty: 'Medium → Hard',
    color: '#8B5CF6',
    questions: [
      { q: 'Fibonacci series using memoization and tabulation', difficulty: 'Easy', company: 'TCS' },
      { q: 'Longest Common Subsequence (LCS)', difficulty: 'Medium', company: 'Infosys, HCL' },
      { q: '0/1 Knapsack Problem', difficulty: 'Medium', company: 'Wipro, Accenture' },
      { q: 'Coin Change — minimum coins for a target amount', difficulty: 'Medium', company: 'Cognizant' },
      { q: 'Longest Increasing Subsequence (LIS)', difficulty: 'Medium', company: 'TCS Digital' },
      { q: 'Matrix Chain Multiplication', difficulty: 'Hard', company: 'Amazon' },
      { q: 'Edit Distance (Levenshtein Distance)', difficulty: 'Hard', company: 'Zoho' },
    ],
  },
  {
    id: 'sorting',
    icon: '🔍',
    title: 'Searching & Sorting',
    difficulty: 'Easy → Medium',
    color: '#EF4444',
    questions: [
      { q: 'Binary Search on a sorted array', difficulty: 'Easy', company: 'TCS, All companies' },
      { q: 'Find the first and last occurrence of a target', difficulty: 'Easy', company: 'Infosys' },
      { q: 'Merge Sort implementation', difficulty: 'Medium', company: 'Wipro, Cognizant' },
      { q: 'Quick Sort implementation and worst case analysis', difficulty: 'Medium', company: 'Accenture' },
      { q: 'Search in a rotated sorted array', difficulty: 'Medium', company: 'TCS Digital' },
      { q: 'Kth largest element in an array', difficulty: 'Medium', company: 'Amazon, Zoho' },
    ],
  },
  {
    id: 'stackqueue',
    icon: '📚',
    title: 'Stacks & Queues',
    difficulty: 'Easy → Medium',
    color: '#06B6D4',
    questions: [
      { q: 'Valid parentheses / bracket matching', difficulty: 'Easy', company: 'TCS, Infosys' },
      { q: 'Implement a stack using queues and vice versa', difficulty: 'Easy', company: 'Wipro' },
      { q: 'Next Greater Element using a monotonic stack', difficulty: 'Medium', company: 'Accenture' },
      { q: 'Sliding window maximum using a deque', difficulty: 'Hard', company: 'Cognizant' },
      { q: 'LRU Cache implementation', difficulty: 'Hard', company: 'TCS Digital, Zoho' },
    ],
  },
];

const difficultyColor = {
  Easy: '#10B981',
  Medium: '#F59E0B',
  Hard: '#EF4444',
};

export default function DSASection() {
  const [openTopic, setOpenTopic] = useState(null);

  return (
    <div className="section-page">
      <div className="section-header">
        <span className="section-eyebrow">📘 DSA Prep</span>
        <h1 className="section-title">Topics to Master</h1>
        <p className="section-sub">
          Curated questions for each topic — mapped to the companies that actually ask them.
          Start from basics, go deeper as you gain confidence.
        </p>
      </div>

      <div className="topic-list">
        {topics.map((topic) => (
          <div
            key={topic.id}
            className={`topic-card ${openTopic === topic.id ? 'open' : ''}`}
            style={{ '--accent': topic.color }}
          >
            <button
              className="topic-header"
              onClick={() => setOpenTopic(openTopic === topic.id ? null : topic.id)}
            >
              <div className="topic-left">
                <span className="topic-icon">{topic.icon}</span>
                <div>
                  <h3 className="topic-name">{topic.title}</h3>
                  <span className="topic-difficulty">{topic.difficulty}</span>
                </div>
              </div>
              <div className="topic-right">
                <span className="topic-count">{topic.questions.length} questions</span>
                <span className="topic-chevron">{openTopic === topic.id ? '▲' : '▼'}</span>
              </div>
            </button>

            {openTopic === topic.id && (
              <div className="question-list">
                {topic.questions.map((item, i) => (
                  <div className="question-item" key={i}>
                    <div className="q-left">
                      <span className="q-num">{String(i + 1).padStart(2, '0')}</span>
                      <span className="q-text">{item.q}</span>
                    </div>
                    <div className="q-right">
                      <span
                        className="q-difficulty"
                        style={{ color: difficultyColor[item.difficulty] }}
                      >
                        {item.difficulty}
                      </span>
                      <span className="q-company">{item.company}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
