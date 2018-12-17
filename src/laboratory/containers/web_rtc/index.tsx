import * as React from 'react';
import { WebRTC } from './web_rtc';
import { TextInput } from '../../presenters/text_input';
import { Button } from '../../presenters/button';
import { Video } from '../../presenters/video';
import { LocalStorage } from '../../common/storage';
import { Modal } from '../../presenters/modal';
import './style.scss';

const RoomPrefix: string = `${window.location.host}/`;
const StorageKey: string = 'web_rtc.room_id';

interface Props {}

interface State {
  room: string,
  localStream: MediaStream | null,
  remoteStreams: Array<MediaStream>,
}

class WebRtcContainer extends React.Component<Props, State> {
  state: State = {
    room: LocalStorage.get(StorageKey),
    localStream: null,
    remoteStreams: [],
  };
  webRTC: (WebRTC | null) = null;

  componentWillUnmount(): void {
    this.disconnect();
  }

  onChangeRoom = (room: string): void => {
    LocalStorage.set(StorageKey, room);
    this.setState({ room });
  };

  connect = (): void => {
    const { room } = this.state;
    const roomNameWithPrefix = `${RoomPrefix}${room}`;

    const onChangeRemoteStreams = (remoteStreams: Array<MediaStream>) => {
      this.setState({ remoteStreams });
    };
    const webRTC = new WebRTC(roomNameWithPrefix, onChangeRemoteStreams);
    webRTC.start()
          .then((localStream) => {
            this.setState({ localStream });
          });
    this.webRTC = webRTC;
  };

  disconnect = (): void => {
    if (this.webRTC != null) {
      this.webRTC.close();
      this.webRTC = null;
    }
    this.setState({ localStream: null, remoteStreams: [] });
  };

  render() {
    const { room, localStream, remoteStreams } = this.state;
    const showModal: boolean = (localStream != null);

    return (
      <div id="browser-api-container">
        <h1>ブラウザ API を使ったサンプル</h1>
        <div className="frame">
          <TextInput
            active={!showModal}
            label="Room"
            onChangeText={this.onChangeRoom}
            value={room}
            maxLength={255}
          />
          <div className="control-buttons">
            <Button onClick={this.connect}>
              Connect
            </Button>
          </div>
        </div>
        {showModal && (
          <Modal onWrapperClick={this.disconnect}>
            <div className="video-modal">
              <Video
                className="self-view"
                autoPlay
                muted
                playsInline
                srcObject={localStream}
              />
              {remoteStreams.map((stream) => {
                return (
                  <Video
                    className="remote-view"
                    key={stream.id}
                    autoPlay
                    playsInline
                    srcObject={stream}
                  />
                );
              })}
            </div>
          </Modal>
        )}
      </div>
    );
  }
}

export { WebRtcContainer };