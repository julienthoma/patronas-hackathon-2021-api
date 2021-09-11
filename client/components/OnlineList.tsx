import { KillFeedItem } from '../types';
import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { IKillFeedItem, IPlayer } from '../../shared/types';
import { Box, TableHead } from '@material-ui/core';
import { Name } from './Name';

interface Props {
  players: IPlayer[];
}

export const OnlineList = ({ players }: Props): JSX.Element => {
  return (
    <div>
      <Box>
        <Box p={2} width={192}>
          Online Players
        </Box>
      </Box>
      {players.map(({ name }, index) => {
        return (
          <Box
            borderRadius={4}
            key={index}
            m={0.5}
            display="flex"
            alignItems="center"
            bgcolor="#262424"
          >
            <Box
              className="player"
              p={2}
              maxWidth={200}
              white-space="nowrap"
              overflow="hidden"
              text-overflow="ellipsis"
            >
              <Name name={name} />
            </Box>
          </Box>
        );
      })}
    </div>
  );
};
