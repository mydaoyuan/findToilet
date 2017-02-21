/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TabBarIOS,
  Text,
  View
} from 'react-native';

import TolietPage from './ios_views/toiletPage';
import ReadPage from './ios_views/readPage';
import WheatherPage from './ios_views/wheather';
import SettingPage from './ios_views/settingPage';

var base64Icon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAQAAACSR7JhAAADtUlEQVR4Ac3YA2Bj6QLH0XPT1Fzbtm29tW3btm3bfLZtv7e2ObZnms7d8Uw098tuetPzrxv8wiISrtVudrG2JXQZ4VOv+qUfmqCGGl1mqLhoA52oZlb0mrjsnhKpgeUNEs91Z0pd1kvihA3ULGVHiQO2narKSHKkEMulm9VgUyE60s1aWoMQUbpZOWE+kaqs4eLEjdIlZTcFZB0ndc1+lhB1lZrIuk5P2aib1NBpZaL+JaOGIt0ls47SKzLC7CqrlGF6RZ09HGoNy1lYl2aRSWL5GuzqWU1KafRdoRp0iOQEiDzgZPnG6DbldcomadViflnl/cL93tOoVbsOLVM2jylvdWjXolWX1hmfZbGR/wjypDjFLSZIRov09BgYmtUqPQPlQrPapecLgTIy0jMgPKtTeob2zWtrGH3xvjUkPCtNg/tm1rjwrMa+mdUkPd3hWbH0jArPGiU9ufCsNNWFZ40wpwn+62/66R2RUtoso1OB34tnLOcy7YB1fUdc9e0q3yru8PGM773vXsuZ5YIZX+5xmHwHGVvlrGPN6ZSiP1smOsMMde40wKv2VmwPPVXNut4sVpUreZiLBHi0qln/VQeI/LTMYXpsJtFiclUN+5HVZazim+Ky+7sAvxWnvjXrJFneVtLWLyPJu9K3cXLWeOlbMTlrIelbMDlrLenrjEQOtIF+fuI9xRp9ZBFp6+b6WT8RrxEpdK64BuvHgDk+vUy+b5hYk6zfyfs051gRoNO1usU12WWRWL73/MMEy9pMi9qIrR4ZpV16Rrvduxazmy1FSvuFXRkqTnE7m2kdb5U8xGjLw/spRr1uTov4uOgQE+0N/DvFrG/Jt7i/FzwxbA9kDanhf2w+t4V97G8lrT7wc08aA2QNUkuTfW/KimT01wdlfK4yEw030VfT0RtZbzjeMprNq8m8tnSTASrTLti64oBNdpmMQm0eEwvfPwRbUBywG5TzjPCsdwk3IeAXjQblLCoXnDVeoAz6SfJNk5TTzytCNZk/POtTSV40NwOFWzw86wNJRpubpXsn60NJFlHeqlYRbslqZm2jnEZ3qcSKgm0kTli3zZVS7y/iivZTweYXJ26Y+RTbV1zh3hYkgyFGSTKPfRVbRqWWVReaxYeSLarYv1Qqsmh1s95S7G+eEWK0f3jYKTbV6bOwepjfhtafsvUsqrQvrGC8YhmnO9cSCk3yuY984F1vesdHYhWJ5FvASlacshUsajFt2mUM9pqzvKGcyNJW0arTKN1GGGzQlH0tXwLDgQTurS8eIQAAAABJRU5ErkJggg==';

class toilet extends Component {
  constructor (){
    super();
    this.state = {
      selectedTab: 'toilet'
    }
  }
  render() {
    return (
      <TabBarIOS>
        <TabBarIOS.Item
          title='厕所'
          icon={{uri:base64Icon,scale:3.5}}
          selected={this.state.selectedTab === 'toilet'}
          onPress={() => {
            this.setState ({
              selectedTab: 'toilet'
            });
          }}>
          <TolietPage/>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title='阅读'
          icon={{uri:base64Icon,scale:3.5}}
          selected={this.state.selectedTab === 'read'}
          onPress={() => {
            this.setState ({
              selectedTab: 'read'
            });
          }}>
         <ReadPage/>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title='天气'
          icon={{uri:base64Icon,scale:3.5}}
          selected={this.state.selectedTab === 'weather'}
          onPress={() => {
            this.setState ({
              selectedTab: 'weather'
            });
          }}>
         <WheatherPage/>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title='设置'
          icon={{uri:base64Icon,scale:3.5}}
          selected={this.state.selectedTab === 'setting'}
          onPress={() => {
            this.setState ({
              selectedTab: 'setting'
            });
          }}>
          <SettingPage/>
        </TabBarIOS.Item>
      </TabBarIOS>
    )
  }
  // _renderContent(name) {
  //   return (
  //     name
  //   )
  // }
}
// export default class toilet extends Component {
//   constructor() {
//     super();
//     this.state = {
//       selectedTab: 'toilet'
//     }
//   }
//   render() {
//     return (
//       <TabBarIOS>
//         <TabBarIOS.Item
//           title="洗手间"
//           icon={{uri: base64Icon, scale: 3}}
//           selected={this.state.selectedTab === 'toliet'}
//           onPress={() => {
//             this.setState({
//               selectedTab: 'toliet',
//             });
//           }}>
//           {this._renderContent()}
//         </TabBarIOS.Item>
//         <TabBarIOS.Item
//           title="阅读"
//           icon={{uri: base64Icon, scale: 3}}
//           selected={this.state.selectedTab === 'read'}
//           onPress={() => {
//             this.setState({
//               selectedTab: 'read'
//             });
//           }}>
//           {this._renderContent()}
//         </TabBarIOS.Item>
//         <TabBarIOS.Item
//           title="天气"
//           icon={{uri: base64Icon, scale: 3}}
//           selectedIcon={{uri: base64Icon, scale: 3}}
//           renderAsOriginal
//           selected={this.state.selectedTab === 'weather'}
//           onPress={() => {
//             this.setState({
//               selectedTab: 'weather'
//             });
//           }}>
//           {this._renderContent()}
//         </TabBarIOS.Item>
//         <TabBarIOS.Item
//           title="设置"
//           icon={{uri: base64Icon, scale: 3}}
//           selectedIcon={{uri: base64Icon, scale: 3}}
//           renderAsOriginal
//           selected={this.state.selectedTab === 'setting'}
//           onPress={() => {
//             this.setState({
//               selectedTab: 'setting'
//             });
//           }}>
//           {this._renderContent()}
//         </TabBarIOS.Item>
//       </TabBarIOS>
//     );
//   }
//   _renderContent () {
//     return (
//       <View>
//         <Text style={{fontSize:22}}>hello my lord</Text>
//       </View>
//     );
//   }
//  }

const styles = StyleSheet.create({

});
 // api 注册应用入口
AppRegistry.registerComponent('toilet', () => toilet);
